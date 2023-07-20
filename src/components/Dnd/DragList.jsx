import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const data = [
    {
        id: "1",
        name: "Item 1",
    },
    {
        id: "2",
        name: "Item 2",
    },
    {
        id: "3",
        name: "Item 3",
    },
    {
        id: "4",
        name: "Item 4",
    },
    {
        id: "5",
        name: "Item 5",
    },
];

export default function DragList() {
    const [stores, setStores] = useState(data);

    const handleDragAndDrop = (results) => {
        const { source, destination, type } = results;

        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
            return;

        if (type === "group") {
            const reorderedStores = [...stores];

            const storeSourceIndex = source.index;
            const storeDestinatonIndex = destination.index;

            const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
            reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

            return setStores(reorderedStores);
        }
        const itemSourceIndex = source.index;
        const itemDestinationIndex = destination.index;

        const storeSourceIndex = stores.findIndex(
            (store) => store.id === source.droppableId
        );
        const storeDestinationIndex = stores.findIndex(
            (store) => store.id === destination.droppableId
        );

        const newSourceItems = [...stores[storeSourceIndex].items];
        const newDestinationItems =
            source.droppableId !== destination.droppableId
                ? [...stores[storeDestinationIndex].items]
                : newSourceItems;

        const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
        newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

        const newStores = [...stores];

        newStores[storeSourceIndex] = {
            ...stores[storeSourceIndex],
            items: newSourceItems,
        };
        newStores[storeDestinationIndex] = {
            ...stores[storeDestinationIndex],
            items: newDestinationItems,
        };

        setStores(newStores);
    };

    return (
        <>
            <DragDropContext onDragEnd={handleDragAndDrop}>
                <div className="text-center text-2xl font-semibold mt-5">
                    <h1>React Beautiful DND</h1>
                </div>
                <Droppable droppableId="ROOT" type="group">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="max-w-2xl m-auto bg-violet-300 p-3 mt-5">
                            {stores.map((store, index) => (
                                <Draggable
                                    draggableId={store.id}
                                    index={index}
                                    key={store.id}
                                >
                                    {(provided) => (
                                        <div
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                            className=" bg-violet-100 my-2 px-5 py-2 rounded-md"
                                        >
                                            <h1>{store.name}</h1>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    );
}

// import React, { useState } from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// export default function DragList() {
//     const [pendingInputBox, setPendingInputBox] = useState(false);
//     const [progressInputBox, setProgressInputBox] = useState(false);
//     const [completeInputBox, setCompleteInputBox] = useState(false);

//     const [pendingTask, setPendingTask] = useState("");
//     const [pendingLists, setPendingLists] = useState([]);
//     const [progressTask, setProgressTask] = useState("");
//     const [progressLists, setProgressLists] = useState([]);
//     const [completedTask, setCompletedTask] = useState("");
//     const [completedLists, setCompletedLists] = useState([]);

//     const addPendingTaskHandler = () => {
//         setPendingLists((prevTask) => [...prevTask, pendingTask]);
//         setPendingTask("");
//     };
//     const addProgressTaskHandler = () => {
//         setProgressLists((prevTask) => [...prevTask, progressTask]);
//         setProgressTask("");
//     };
//     const addCompletedTaskHandler = () => {
//         setCompletedLists((prevTask) => [...prevTask, completedTask]);
//         setCompletedTask("");
//     };
//     return (
//         <div className="container">
//             <h1 className="text-center text-3xl font-bold">DRAG AND DROP</h1>
//             <p className="text-center mb-10 text-[#5BC9B4]">React Beautiful DND</p>

//             <div className="flex justify-between w-full gap-10 flex-wrap md:flex-nowrap">
//                 {/* pending list */}
//                 <div className="md:w-1/3 w-full flex flex-col">
//                     <div className="flex justify-between text-xl mb-6 font-bold">
//                         <span>Pending</span>
//                         <button onClick={() => setPendingInputBox(true)}>+</button>
//                     </div>
//                     {pendingInputBox && (
//                         <div className="flex flex-col bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C] space-y-2 mb-5">
//                             <div className="flex justify-between">
//                                 <p className="text-sm">To-do Title</p>
//                                 <button
//                                     className="text-[10px]"
//                                     onClick={() => setPendingInputBox(false)}
//                                 >
//                                     <i className="fi fi-br-cross"></i>
//                                 </button>
//                             </div>
//                             <input
//                                 type="text"
//                                 className="bg-transparent outline-none border-b-[#32BBB4] border-b-[1px]"
//                                 placeholder="e.g. Send Invitation"
//                                 value={pendingTask}
//                                 onChange={(e) => setPendingTask(e.target.value)}
//                             />
//                             <button
//                                 onClick={addPendingTaskHandler}
//                                 className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold"
//                             >
//                                 Add
//                             </button>
//                         </div>
//                     )}
//                     {pendingLists.map((pendingList) => (
//                         <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
//                             <p>{pendingList}</p>
//                             <div className="flex justify-end items-end h-8">
//                                 <i className="fa fa-clock-o" aria-hidden="true"></i>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {/* in progress list */}
//                 <div className="md:w-1/3 w-full flex flex-col">
//                     <div className="flex justify-between text-xl mb-6 font-bold">
//                         <span>In Progress</span>
//                         <button onClick={() => setProgressInputBox(true)}>+</button>
//                     </div>
//                     {progressInputBox && (
//                         <div className="flex flex-col bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C] space-y-2 mb-5">
//                             <div className="flex justify-between">
//                                 <p className="text-sm">To-do Title</p>
//                                 <button
//                                     className="text-[10px]"
//                                     onClick={() => setProgressInputBox(false)}
//                                 >
//                                     <i className="fi fi-br-cross"></i>
//                                 </button>
//                             </div>
//                             <input
//                                 type="text"
//                                 className="bg-transparent outline-none border-b-[#32BBB4] border-b-[1px]"
//                                 placeholder="e.g. Send Invitation"
//                                 value={progressTask}
//                                 onChange={(e) => setProgressTask(e.target.value)}
//                             />
//                             <button
//                                 onClick={addProgressTaskHandler}
//                                 className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold"
//                             >
//                                 Add
//                             </button>
//                         </div>
//                     )}
//                     {progressLists.map((progressList) => (
//                         <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
//                             <p>{progressList}</p>
//                             <div className="flex justify-end items-end h-8">
//                                 <i className="fa fa-clock-o" aria-hidden="true"></i>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {/* completed list */}
//                 <div className="md:w-1/3 w-full flex flex-col">
//                     <div className="flex justify-between text-xl mb-6 font-bold">
//                         <span>Completed</span>
//                         <button onClick={() => setCompleteInputBox(true)}>+</button>
//                     </div>
//                     {completeInputBox && (
//                         <div className="flex flex-col bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C] space-y-2 mb-5">
//                             <div className="flex justify-between">
//                                 <p className="text-sm">To-do Title</p>
//                                 <button
//                                     className="text-[10px]"
//                                     onClick={() => setCompleteInputBox(false)}
//                                 >
//                                     <i className="fi fi-br-cross"></i>
//                                 </button>
//                             </div>
//                             <input
//                                 type="text"
//                                 className="bg-transparent outline-none border-b-[#32BBB4] border-b-[1px]"
//                                 placeholder="e.g. Send Invitation"
//                                 value={completedTask}
//                                 onChange={(e) => setCompletedTask(e.target.value)}
//                             />
//                             <button
//                                 onClick={addCompletedTaskHandler}
//                                 className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold"
//                             >
//                                 Add
//                             </button>
//                         </div>
//                     )}
//                     {completedLists.map((completedList) => (
//                         <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
//                             <p>{completedList}</p>
//                             <div className="flex justify-end items-end h-8">
//                                 <i className="fa fa-clock-o" aria-hidden="true"></i>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
