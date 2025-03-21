import { useTheme } from "../context/ThemeContext";
import { useState, useCallback, useMemo, useRef } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import toast, { Toaster } from 'react-hot-toast';
import { ReactFlow, useNodesState, useEdgesState, addEdge, MiniMap, Controls, Background, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TextUpdaterNode } from "../components/TextUpdaterNode.jsx";
import { BsFillNodePlusFill } from "react-icons/bs";
import { LuMousePointer2 } from "react-icons/lu";
import { MdOutlineRectangle } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { GoDiamond } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { CiImport } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Stage, Layer, Rect, Circle, Line, Text } from "react-konva";

function Mindmap() {

    const { dark } = useTheme();

    const diagramOptionList = [
        'select',
        'rectangle',
        'circle',
        'diamond',
        'pencil',
        'delete',
        'clear',
        'line'
    ]

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const [option, setOption] = useState('');
    const [shapes, setShapes] = useState([]);
    const [selectedShapeId, setSelectedShapeId] = useState(null);
    const [strokeColor, setStrokeColor] = useState('#000000');
    const [fillColor, setFillColor] = useState('#ffffff');
    const [diagramOption, setDiagramOption] = useState(diagramOptionList[0]);

    const [drawing, setDrawing] = useState(false);
    const [currentLine, setCurrentLine] = useState(null);
    const [lines, setLines] = useState([]);
    const [isDrawingMode, setIsDrawingMode] = useState(false);
    const [isLineMode, setIsLineMode] = useState(false);
    const [image, setImage] = useState(null);
    const [imgObj, setImgObj] = useState(null);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const clearCanvas = () => {
        setLines([]);
        setShapes([]);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new window.Image(); // Use new Image() properly
                img.src = reader.result;
                img.onload = () => setImgObj(img); // Set image state only when loaded
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const addShape = (type) => {
        const newShape = {
            id: shapes.length + 1,
            type,
            x: 50, y: 50, width: 100, height: 100, radius: 50,
            fill: fillColor, stroke: strokeColor, strokeWidth: 2,
            draggable: true
        };
        setShapes([...shapes, newShape]);
    };

    const updateShape = (id, newAttrs) => {
        setShapes(shapes.map(shape => shape.id === id ? { ...shape, ...newAttrs } : shape));
    };

    const deleteShape = () => {
        if (selectedShapeId !== null) {
            setShapes(shapes.filter(shape => shape.id !== selectedShapeId));
            setSelectedShapeId(null);
        }
    };

    const handleMouseDown = (e) => {
        if (isDrawingMode) {
            setDrawing(true);
            const pos = e.target.getStage().getPointerPosition();
            setLines([...lines, { points: [pos.x, pos.y] }]);
        }
        else if (isLineMode) {
            const pos = e.target.getStage().getPointerPosition();
            setCurrentLine({ points: [pos.x, pos.y, pos.x, pos.y] });
        }
    };

    const handleMouseMove = (e) => {
        if (drawing) {
            const stage = e.target.getStage();
            const point = stage.getPointerPosition();
            let lastLine = lines[lines.length - 1];
            lastLine.points = [...lastLine.points, point.x, point.y];
            setLines([...lines.slice(0, -1), lastLine]);
        }
        else if (currentLine) {
            const stage = e.target.getStage();
            const point = stage.getPointerPosition();
            setCurrentLine({ points: [currentLine.points[0], currentLine.points[1], point.x, point.y] });
        }
    };

    const handleMouseUp = () => {
        setDrawing(false);
        if (currentLine) {
            setLines([...lines, currentLine]);
            setCurrentLine(null);
        }
    };

    const addDiamond = () => {
        const newDiamond = {
            id: shapes.length + 1,
            type: "diamond",
            x: 100,
            y: 100,
            size: 80,
            fill: fillColor,
            stroke: strokeColor,
        };
        setShapes([...shapes, newDiamond]);
    };

    const downloadCanvas = () => {
        if (!stageRef.current) return;

        const stage = stageRef.current;
        const backgroundColor = dark ? "white" : "black";

        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = stage.width();
        tempCanvas.height = stage.height();
        const ctx = tempCanvas.getContext("2d");

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        const stageImage = new Image();
        stageImage.src = stage.toDataURL({ pixelRatio: 2 });

        stageImage.onload = () => {
            ctx.drawImage(stageImage, 0, 0);

            const finalImage = tempCanvas.toDataURL("image/png");

            const link = document.createElement("a");
            link.href = finalImage;
            link.download = "canvas.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            toast.success("Image Downloaded");
        };
    };

    //Flow map with react flow

    const addNode = () => {
        if (!nodename) {
            toast.error("Node name missing");
            return;
        }

        const newNodeId = (nodes.length + 1).toString();
        const newNode = {
            id: newNodeId,
            position: { x: Math.random() * 600, y: Math.random() * 400 },
            data: { label: nodename },
        };

        setNodes((nds) => [...nds, newNode]);

        toast.success("Node added");
        setNodename('');
        setNewNode(false);
    }

    const deleteNode = (nodeId) => {
        setNodes((nds) => nds.filter((node) => node.id !== nodeId));
        setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
        toast.success("Node deleted");
    };

    const deleteEdge = (edgeId) => {
        setEdges((eds) => eds.filter((edge) => edge.id !== edgeId));
        toast.success("Edge deleted");
    };


    const initialNodes = [
        { id: '1', position: { x: 500, y: 100 }, data: { label: '1' } },
        { id: '2', position: { x: 500, y: 300 }, data: { label: '2' } },
    ];

    const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState(initialEdges);
    const [background, setBackground] = useState('dots');
    const [newNode, setNewNode] = useState(false);
    const [nodename, setNodename] = useState('');

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const onNodeChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );
    const onEdgeChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );

    const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

    const stageRef = useRef(null);

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 lg:py-5 gap-5`} >

                {/* sidebar section */}

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] ${option === 'diagram' ? "lg:h-[130vh]" : "lg:h-[110vh]"} px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col justify-start items-center lg:gap-2`}>
                    <Toaster />

                    <div className={`py-2 hidden lg:flex px-3 w-full md:w-[30%] rounded-md bg-transparent justify-between items-center gap-4`}>
                        <p className={`w-full py-2 px-4 rounded-md ${dark ? "border-2 border-black text-black" : "border-2 border-white text-white"} ${option === 'diagram' ? "bg-cyan-500" : "bg-transparent"} active:scale-95 text-center duration-200 ease-in-out cursor-pointer hover:opacity-60`} onClick={() => setOption('diagram')}>Diagram</p>
                        <p className={`w-full py-2 px-4 rounded-md ${dark ? "border-2 border-black text-black" : "border-2 border-white text-white"} ${option === 'flowmap' ? "bg-cyan-500" : "bg-transparent"} active:scale-95 text-center duration-200 ease-in-out cursor-pointer hover:opacity-60`} onClick={() => setOption('flowmap')}>Flowmap</p>
                    </div>

                    <div className="w-full h-full px-10 lg:hidden flex justify-center items-center">
                        <h1 className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-3xl md:text-5xl text-center font-semibold font-Titillium opacity-50`}>This Feature Works Best On Large Screens :)</h1>
                    </div>

                    <div className="h-full w-full flex-col hidden lg:block">

                        {/* diagram */}
                        <div className={`w-full ${option === 'diagram' ? "block" : "hidden"} h-full ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out rounded-md flex flex-col justify-start items-center gap-3`}>
                            <div className={`bg-transparent w-full flex justify-center items-center gap-2`}>
                                <div className={`w-auto px-3 h-auto py-2 rounded-md shadow-md mt-5 ${dark ? "bg-white" : "bg-zinc-800"} duration-200 ease-in-out flex justify-center items-center gap-2`}>
                                    <span className={`${dark ? "text-black hover:bg-gray-300" : "text-white hover:bg-zinc-500"} ${diagramOption === 'select' ? "bg-cyan-600 text-white" : ""} duration-200 ease-in-out p-2 rounded-md cursor-pointer text-sm`} onClick={() => { setDiagramOption('select'); setIsDrawingMode(false); setIsLineMode(false); }}><LuMousePointer2 /></span>
                                    <span className={`${dark ? "text-black hover:bg-gray-300" : "text-white hover:bg-zinc-500"} ${diagramOption === 'rectangle' ? "bg-cyan-600 text-white" : ""} duration-200 ease-in-out p-2 rounded-md cursor-pointer text-sm`} onClick={() => { setDiagramOption('rectangle'); addShape("rectangle"); }}><MdOutlineRectangle /></span>
                                    <span className={`${dark ? "text-black hover:bg-gray-300" : "text-white hover:bg-zinc-500"} ${diagramOption === 'circle' ? "bg-cyan-600 text-white" : ""} duration-200 ease-in-out p-2 rounded-md cursor-pointer text-sm`} onClick={() => { setDiagramOption('circle'); addShape("circle"); }}><FaRegCircle /></span>
                                    <span className={`${dark ? "text-black hover:bg-gray-300" : "text-white hover:bg-zinc-500"} ${diagramOption === 'diamond' ? "bg-cyan-600 text-white" : ""} duration-200 ease-in-out p-2 rounded-md cursor-pointer text-sm`} onClick={() => { setDiagramOption('diamond'); addShape("diamond"); addDiamond() }}><GoDiamond /></span>
                                    <span className={`${dark ? "text-black hover:bg-gray-300" : "text-white hover:bg-zinc-500"} ${diagramOption === 'pencil' ? "bg-cyan-600 text-white" : ""} duration-200 ease-in-out p-2 rounded-md cursor-pointer text-sm`} onClick={() => { setDiagramOption('pencil'); setIsDrawingMode(true); setIsLineMode(false); }}><LuPencil /></span>
                                    <span className={`${dark ? "text-black hover:bg-gray-300" : "text-white hover:bg-zinc-500"} ${diagramOption === 'line' ? "bg-cyan-600 text-white" : ""} duration-200 ease-in-out p-2 rounded-md cursor-pointer text-sm`} onClick={() => { setDiagramOption('line'); setIsDrawingMode(false); setIsLineMode(true); }}><MdOutlineArrowRightAlt /></span>
                                </div>
                                <div className={`w-auto px-3 h-auto py-3 rounded-md shadow-md mt-5 ${dark ? "bg-white" : "bg-zinc-800"} duration-200 ease-in-out flex justify-center items-center gap-2`}>
                                    <span className={`text-[14px] ${dark ? "text-black" : "text-white"} duration-200 ease-in-out`}>Fill Color : </span>
                                    <input onChange={(e) => { setFillColor(e.target.value); updateShape(selectedShapeId, { fill: e.target.value }); }} type="color" className={`w-5 h-5 bg-transparent cursor-pointer rounded-full border-none`} />
                                    <span className={`text-sm ${dark ? "text-black" : "text-white"} text-[14px] duration-200 ease-in-out`}>Stroke Color : </span>
                                    <input onChange={(e) => { setStrokeColor(e.target.value); updateShape(selectedShapeId, { stroke: e.target.value }); }} type="color" className={`w-5 bg-transparent h-5 cursor-pointer rounded-full border-none`} />
                                </div>
                                <div className={`w-auto px-3 h-auto py-2 rounded-md shadow-md mt-5 ${dark ? "bg-white" : "bg-zinc-800"} duration-200 ease-in-out flex justify-center items-center gap-2`}>
                                    <span className={`${dark ? "text-black hover:bg-gray-300" : "text-white hover:bg-zinc-500"} duration-200 ease-in-out p-2 rounded-md cursor-pointer text-sm`} onClick={deleteShape}><RxCross1 /></span>
                                    <span className={`${dark ? "text-black hover:bg-gray-300" : "text-white hover:bg-zinc-500"} duration-200 ease-in-out p-2 rounded-md cursor-pointer text-sm`} onClick={clearCanvas}><FaRegTrashCan /></span>
                                </div>
                                <div className={`w-auto px-3 h-auto py-2 rounded-md shadow-md mt-5 ${dark ? "bg-white" : "bg-zinc-800"} duration-200 ease-in-out flex justify-center relative items-center gap-2`}>
                                    <input type="file" accept="image/*" className="absolute inset-3 w-16 opacity-0" />
                                    <span className={`${dark ? "text-black" : "text-black"} hover:bg-emerald-500 bg-emerald-300 duration-200 ease-in-out p-2 rounded-md cursor-pointer active:scale-95 text-sm flex justify-center items-center gap-2`}>Import <CiImport /></span>
                                    <span className={`${dark ? "text-black" : "text-black"} hover:bg-yellow-500 bg-yellow-300 duration-200 ease-in-out p-2 rounded-md cursor-pointer active:scale-95 text-sm flex justify-center items-center gap-2`} onClick={downloadCanvas}>Save <FaDownload /></span>
                                </div>
                            </div>

                            <div className={`w-full h-full overflow-hidden bg-transparent`}>
                                <Stage ref={stageRef} width={window.innerWidth} height={window.innerHeight} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                                    <Layer>
                                        {shapes.map((shape) => (
                                            shape.type === "rectangle" ? (
                                                <Rect key={shape.id}
                                                    {...shape}
                                                    onClick={() => setSelectedShapeId(shape.id)}
                                                    onDragEnd={(e) => updateShape(shape.id, { x: e.target.x(), y: e.target.y() })}
                                                />
                                            ) : shape.type === "circle" ? (
                                                <Circle key={shape.id}
                                                    {...shape}
                                                    onClick={() => setSelectedShapeId(shape.id)}
                                                    onDragEnd={(e) => updateShape(shape.id, { x: e.target.x(), y: e.target.y() })}
                                                />
                                            ) : null
                                        ))}

                                        {lines.map((line, index) => (
                                            <Line
                                                key={index}
                                                points={line.points}
                                                stroke="black"
                                                strokeWidth={2}
                                                lineCap="round"
                                                lineJoin="round"
                                            />
                                        ))}

                                        {imgObj && (
                                            <Image
                                                image={imgObj} // Use the preloaded image
                                                x={50}
                                                y={50}
                                                draggable
                                            />
                                        )}
                                    </Layer>
                                </Stage>
                            </div>
                        </div>


                        {/* flowmap */}
                        <div style={{ width: '100%', height: '100%' }} className={` ${option === 'flowmap' ? "block" : "hidden"} ${dark ? "bg-white" : "bg-black"} relative duration-200 ease-in-out rounded-md`}>

                            <div title="Add a new node" className={`w-auto h-auto absolute rounded-full top-5 right-5 z-40 p-3 flex justify-center items-center shadow-lg active:scale-95 cursor-pointer ${dark ? "bg-gray-200 border-[1px] border-black" : "bg-black border-[1px] border-white"} duration-200 ease-in-out`} onClick={() => setNewNode(!newNode)}>
                                <BsFillNodePlusFill className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out cursor-pointer text-2xl`} />
                            </div>

                            <div className={`w-52 z-40 px-2 h-auto py-4 ${newNode ? "block" : "hidden"} absolute top-10 right-20 rounded-lg ${dark ? "bg-gray-200 border-[1px] border-black" : "bg-black border-[1px] border-white"} duration-200 ease-in-out flex flex-col justify-start items-center gap-3`}>
                                <input type="text" value={nodename} className={`w-full rounded-md ${dark ? "bg-white text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-2 outline-none py-1`} placeholder="Enter node title" onChange={(e) => setNodename(e.target.value)} />
                                <p className={`w-full rounded-md py-1 px-2 text-center ${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-70 duration-200 ease-in-out active:scale-95 cursor-pointer`} onClick={addNode}>Add Node</p>
                            </div>

                            <div className={`absolute z-40 top-5 py-2 px-3 w-auto grid grid-cols-3 left-5 justify-items-center gap-3 rounded-md bg-transparent`}>
                                <span className={`px-3 py-2 text-[10px] text-center rounded-md ${dark ? "text-black" : "text-white"} cursor-pointer ${background === 'dots' ? "bg-cyan-500 text" : "border-[1.5px] border-black"} duration-200 ease-in-out`} onClick={() => setBackground('dots')}>Dots</span>
                                <span className={`px-3 py-2 text-[10px] text-center rounded-md ${dark ? "text-black" : "text-white"} cursor-pointer ${background === 'cross' ? "bg-cyan-500 text" : "border-[1.5px] border-black"} duration-200 ease-in-out`} onClick={() => setBackground('cross')}>Cross</span>
                                <span className={`px-3 py-2 text-[10px] text-center rounded-md ${dark ? "text-black" : "text-white"} cursor-pointer ${background === 'lines' ? "bg-cyan-500 text" : "border-[1.5px] border-black"} duration-200 ease-in-out`} onClick={() => setBackground('lines')}>Lines</span>
                            </div>

                            <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodeChange} onEdgesChange={onEdgeChange} onConnect={onConnect} nodeTypes={{}} onNodeClick={(_, node) => deleteNode(node.id)} onEdgeClick={(_, edge) => deleteEdge(edge.id)}>
                                <Controls />
                                <MiniMap zoomable pannable />
                                <Background variant={background} gap={12} size={1}
                                />
                            </ReactFlow>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Mindmap
