import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LessonCatalog() {
  const [lessons, setLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [selectedLessons, setSelectedLessons] = useState([]);

  const fetchLessons = async () => {
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (filterTag) params.tag = filterTag;
    try {
      const res = await axios.get('http://localhost:5000/lessons', { params });
      setLessons(res.data);
    } catch (err) {
      console.error('Error fetching lessons:', err);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, [searchTerm, filterTag]);

  const toggleSelect = (lesson) => {
    if (selectedLessons.includes(lesson._id)) {
      setSelectedLessons(selectedLessons.filter(id => id !== lesson._id));
    } else {
      setSelectedLessons([...selectedLessons, lesson._id]);
    }
  };

  return (
    <div>
      {/* Search & Filter */}
      <div className="mb-4 flex gap-2 flex-wrap justify-center">
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs"
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setFilterTag('Math')}
        >
          Filter Math
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          onClick={() => { setFilterTag(''); }}
        >
          Clear Filter
        </button>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="border rounded overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 flex flex-col">
            <img src={lesson.videoUrl} alt={lesson.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
              <p className="text-gray-700 mb-2">{lesson.description}</p>
              <p className="text-sm mb-4"><strong>Duration:</strong> {lesson.duration} min</p>
              <button
                className={`mt-auto px-4 py-2 rounded text-white ${selectedLessons.includes(lesson._id) ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => toggleSelect(lesson)}
              >
                {selectedLessons.includes(lesson._id) ? 'Remove' : 'Add'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Selected lessons summary */}
      <div className="mt-6 p-4 bg-gray-100 rounded shadow">
        <h4 className="text-lg font-semibold mb-2">Selected Lessons: {selectedLessons.length}</h4>
        {/* You can list selected lessons here if you want */}
      </div>
    </div>
  );
}

export default LessonCatalog;