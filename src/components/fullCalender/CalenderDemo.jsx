import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState } from "react";

// const events = [
//     { title: "event 1", date: "2023-06-01" },
//     { title: "Ruchi's birthday", date: "2023-09-11" },
// ];

export default function CalenderDemo() {
    const [events, setEvents] = useState([]);
    // const dateClickHandler = (arg) => {
    //     console.log(arg);
    //     alert(arg.dateStr);
    // };

    const handleSelect = (info) => {
        console.log(info);
        const { start, end } = info;
        const eventNamePrompt = prompt("Enter event name: ");
        const randomId = Math.round(Math.random(100) * 100);
        if (eventNamePrompt) {
            setEvents([
                ...events,
                { start, end, title: eventNamePrompt, id: randomId },
            ]);
        }
    };

    const handleDelete = (eventInfo) => {
        const res = confirm("Do you really want to delete this event?");
        console.log(eventInfo.event.id);
        if (res) {
            const updatedEvent = events.filter(
                (event) => event.id != eventInfo.event.id
            );
            console.log(updatedEvent);
            setEvents(updatedEvent);
            console.log(events);
        }
    };

    return (
        <div className="max-w-6xl m-auto my-5">
            <FullCalendar
                editable={true}
                selectable={true}
                events={events}
                select={handleSelect}
                // selectAllow={true}

                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth timeGridWeek timeGridDay",
                }}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                eventContent={(info) => <EventItem info={info} />}
                eventClick={handleDelete}
            // dateClick={dateClickHandler}
            />
        </div>
    );
}

const EventItem = ({ info }) => {
    const { event } = info
    return (
        <div className='bg-sky-500 w-full outline-none border-none py-1  text-center rounded-md'>
            <p className=''>{event.title}</p>
        </div>
    );
};
