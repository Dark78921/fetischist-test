import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LessonCatalog() {
  const [allLessons, setAllLessons] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [selectedLessons, setSelectedLessons] = useState([]);

  // Fetch all lessons once
  const fetchLessons = async () => {
    try {
      const res = await axios.get('http://localhost:5000/lessons');
      setAllLessons(res.data);
      setLessons(res.data);
    } catch (err) {
      console.error('Error fetching lessons:', err);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  // Client-side filtering
  useEffect(() => {
    let filtered = allLessons;

    if (searchTerm) {
      filtered = filtered.filter(lesson =>
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setLessons(filtered);
  }, [searchTerm, allLessons]);

  const toggleSelect = (lesson) => {
    if (selectedLessons.includes(lesson._id)) {
      setSelectedLessons(selectedLessons.filter(id => id !== lesson._id));
    } else {
      setSelectedLessons([...selectedLessons, lesson._id]);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search lessons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Lessons Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {lessons.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-xl">No lessons found.</p>
        ) : (
          lessons.map((lesson) => (
            <div
              key={lesson._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={lesson.videoUrl || 'https://via.placeholder.com/400x200?text=Lesson'}
                  alt={lesson.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{lesson.title}</h2>
                <p className="text-gray-600 mb-4">{lesson.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-medium">
                    Duration: {lesson.duration} min
                  </span>
                  <button
                    className={`px-4 py-2 rounded-lg text-white font-semibold transition-transform ${
                      selectedLessons.includes(lesson._id)
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-green-500 hover:bg-green-600'
                    }`}
                    onClick={() => toggleSelect(lesson)}
                  >
                    {selectedLessons.includes(lesson._id) ? 'Remove' : 'Add'}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Selected lessons summary */}
      <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-4 text-gray-800">
          Selected Lessons: {selectedLessons.length}
        </h4>
        {selectedLessons.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {lessons
              .filter((lesson) => selectedLessons.includes(lesson._id))
              .map((lesson) => (
                <li key={lesson._id}>{lesson.title}</li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LessonCatalog;