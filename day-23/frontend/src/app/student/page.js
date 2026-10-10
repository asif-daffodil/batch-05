"use client"

import { useEffect, useState } from "react";

const Page = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newStudent = { name, city };
        const response = await fetch("http://localhost:5000/api/add-student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(newStudent),
        });
        console.log(await response.json());
        setName("");
        setCity("");
    }

    useEffect(() => {
        fetch("http://localhost:5000/api/all-user")
            .then((response) => response.json())
            .then((data) => setStudents(data));
    }, []);

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-10">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
                    <h1 className="text-3xl font-bold text-slate-800">Students</h1>
                    <p className="mt-2 text-sm text-slate-500">Manage your student records with ease.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
                    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
                        <h2 className="text-xl font-semibold text-slate-800">Student List</h2>

                        <div className="mt-4 space-y-3">
                            {students.length === 0 ? (
                                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-sm text-slate-500">
                                    No students found.
                                </div>
                            ) : (
                                students.map((student) => (
                                    <div
                                        key={student.id}
                                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:shadow-sm"
                                    >
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-800">{student.name}</h3>
                                            {student.city && (
                                                <p className="text-sm text-slate-500">{student.city}</p>
                                            )}
                                        </div>
                                        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                                            Active
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <form className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl" onSubmit={ handleSubmit }>
                        <h2 className="text-2xl font-bold">Add Student</h2>
                        <p className="mt-1 text-sm text-indigo-100">Enter the student details below.</p>

                        <div className="mt-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm font-medium text-indigo-100">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-indigo-100/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="mb-1 block text-sm font-medium text-indigo-100">
                                    City
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-indigo-100/80 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
                            >
                                Add Student
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;