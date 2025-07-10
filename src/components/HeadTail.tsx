// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft, ChevronDown, Play, RotateCcw } from 'lucide-react';

// type Selection = 'H' | 'T';

// type Column = {
//   type: Selection;
//   values: Selection[];
// };

// const HeadTail = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   const [columns, setColumns] = useState<Column[]>([]);
//   const [validationMessage, setValidationMessage] = useState('');
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleSubmit = () => {
//     if (!selectedValue || selectedValue === 'Select Value') {
//       setValidationMessage('Please select value from dropdown');
//       return;
//     }

//     const value = selectedValue as Selection;
//     setValidationMessage('');

//     const updated = [...columns];

//     // Find last column with same type
//     const lastColumnIndex = [...updated].reverse().findIndex(col => col.type === value);
//     const actualIndex = lastColumnIndex !== -1 ? updated.length - 1 - lastColumnIndex : -1;

//     if (actualIndex !== -1 && updated[updated.length - 1].type === value) {
//       // If last column is same type, append to it
//       updated[actualIndex].values.push(value);
//     } else {
//       // Create new column for this value
//       updated.push({ type: value, values: [value] });
//     }

//     setColumns(updated);
//     setSelectedValue('');
//     setDropdownOpen(false);
//   };

//   const handleReset = () => {
//     setColumns([]);
//     setSelectedValue('');
//     setValidationMessage('');
//     setDropdownOpen(false);
//   };

//   const maxRows = Math.max(...columns.map(col => col.values.length), 0);

//   // Calculate statistics
//   const totalH = columns.flatMap(c => c.values).filter(v => v === 'H').length;
//   const totalT = columns.flatMap(c => c.values).filter(v => v === 'T').length;

//   return (
//     <div className="min-h-screen p-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-8">
//           <Link
//             to="/"
//             className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to Home
//           </Link>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">Head & Tail Game</h1>
//             <p className="text-gray-600 text-lg">
//               Select H or T and watch as they arrange in columns dynamically
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
//           </div>

//           <div className="max-w-md mx-auto mb-12">
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Choose your selection:
//               </label>
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-200"
//                 >
//                   <span className={selectedValue ? 'text-gray-800' : 'text-gray-400'}>
//                     {selectedValue || 'Select Value'}
//                   </span>
//                   <ChevronDown className={`w-5 h-5 text-gray-400 float-right mt-0.5 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {dropdownOpen && (
//                   <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
//                     <button
//                       onClick={() => {
//                         setSelectedValue('H');
//                         setDropdownOpen(false);
//                       }}
//                       className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 border-b border-gray-100"
//                     >
//                       <span className="font-semibold text-blue-600">H</span>
//                       <span className="text-gray-500 ml-2">- Head</span>
//                     </button>
//                     <button
//                       onClick={() => {
//                         setSelectedValue('T');
//                         setDropdownOpen(false);
//                       }}
//                       className="w-full px-4 py-3 text-left hover:bg-purple-50 transition-colors duration-150"
//                     >
//                       <span className="font-semibold text-purple-600">T</span>
//                       <span className="text-gray-500 ml-2">- Tail</span>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {validationMessage && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
//                 <p className="text-red-600 text-sm font-medium">{validationMessage}</p>
//               </div>
//             )}

//             <div className="flex gap-4">
//               <button
//                 onClick={handleSubmit}
//                 className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
//               >
//                 <Play className="w-5 h-5 mr-2" />
//                 Submit
//               </button>
              
//               <button
//                 onClick={handleReset}
//                 className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
//               >
//                 <RotateCcw className="w-5 h-5 mr-2" />
//                 Reset
//               </button>
//             </div>
//           </div>

//           {/* Game Display Area */}
//           {columns.length > 0 && (
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Game Board</h3>
              
//               <div className="flex justify-center gap-6">
//                 {columns.map((col, colIndex) => (
//                   <div key={colIndex} className="flex flex-col items-center">
//                     <div className={`text-lg font-bold mb-4 flex items-center ${
//                       col.type === 'H' ? 'text-blue-600' : 'text-purple-600'
//                     }`}>
//                       <span className={`w-8 h-8 text-white rounded-full flex items-center justify-center mr-2 ${
//                         col.type === 'H' ? 'bg-blue-500' : 'bg-purple-500'
//                       }`}>
//                         {col.type}
//                       </span>
//                       {col.type === 'H' ? 'Head' : 'Tail'} Column {colIndex + 1}
//                     </div>
//                     <div className="space-y-2">
//                       {Array.from({ length: maxRows }).map((_, rowIndex) => (
//                         <div
//                           key={rowIndex}
//                           className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center font-bold text-xl transition-all duration-300 ${
//                             col.values[rowIndex] === 'H'
//                               ? 'bg-blue-500 text-white border-blue-500 shadow-lg transform scale-105'
//                               : col.values[rowIndex] === 'T'
//                               ? 'bg-purple-500 text-white border-purple-500 shadow-lg transform scale-105'
//                               : 'bg-gray-200 border-gray-300 text-gray-400'
//                           }`}
//                         >
//                           {col.values[rowIndex] || ''}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 text-center">
//                 <p className="text-gray-600 mb-2">
//                   <span className="font-semibold">H Count:</span> {totalH} | 
//                   <span className="font-semibold"> T Count:</span> {totalT}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Grid Size: {maxRows} rows × {columns.length} columns
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeadTail;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Play, RotateCcw } from 'lucide-react';

type Selection = 'H' | 'T';

type Column = {
  type: Selection;
  values: Selection[];
};

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [columns, setColumns] = useState<Column[]>([]);
  const [validationMessage, setValidationMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = () => {
    if (!selectedValue || selectedValue === 'Select Value') {
      setValidationMessage('Please select value from dropdown');
      return;
    }

    const value = selectedValue as Selection;
    setValidationMessage('');

    const updated = [...columns];

    // Find last column with same type
    const lastColumnIndex = [...updated].reverse().findIndex(col => col.type === value);
    const actualIndex = lastColumnIndex !== -1 ? updated.length - 1 - lastColumnIndex : -1;

    if (actualIndex !== -1 && updated[updated.length - 1].type === value) {
      // If last column is same type, append to it
      updated[actualIndex].values.push(value);
    } else {
      // Create new column for this value
      updated.push({ type: value, values: [value] });
    }

    setColumns(updated);
    setSelectedValue('');
    setDropdownOpen(false);
  };

  const handleReset = () => {
    setColumns([]);
    setSelectedValue('');
    setValidationMessage('');
    setDropdownOpen(false);
  };

  const maxRows = Math.max(...columns.map(col => col.values.length), 0);

  // Calculate statistics
  const totalH = columns.flatMap(c => c.values).filter(v => v === 'H').length;
  const totalT = columns.flatMap(c => c.values).filter(v => v === 'T').length;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Head & Tail Game</h1>
            <p className="text-gray-600 text-lg">
              Select H or T and watch as they arrange in columns dynamically
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-md mx-auto mb-12">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Choose your selection:
              </label>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-200"
                >
                  <span className={selectedValue ? 'text-gray-800' : 'text-gray-400'}>
                    {selectedValue || 'Select Value'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 float-right mt-0.5 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => {
                        setSelectedValue('H');
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 border-b border-gray-100"
                    >
                      <span className="font-semibold text-blue-600">H</span>
                      <span className="text-gray-500 ml-2">- Head</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedValue('T');
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-purple-50 transition-colors duration-150"
                    >
                      <span className="font-semibold text-purple-600">T</span>
                      <span className="text-gray-500 ml-2">- Tail</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {validationMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm font-medium">{validationMessage}</p>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Submit
              </button>
              
              <button
                onClick={handleReset}
                className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </button>
            </div>
          </div>

          {/* Game Display Area */}
          {columns.length > 0 && (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Game Board</h3>
              
              <div className="flex justify-center gap-6">
                {columns.map((col, colIndex) => (
                  <div key={colIndex} className="flex flex-col items-center">
                    <div className="space-y-2">
                      {Array.from({ length: maxRows }).map((_, rowIndex) => (
                        <div
                          key={rowIndex}
                          className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center font-bold text-xl transition-all duration-300 ${
                            col.values[rowIndex] === 'H'
                              ? 'bg-blue-500 text-white border-blue-500 shadow-lg transform scale-105'
                              : col.values[rowIndex] === 'T'
                              ? 'bg-purple-500 text-white border-purple-500 shadow-lg transform scale-105'
                              : 'bg-gray-200 border-gray-300 text-gray-400'
                          }`}
                        >
                          {col.values[rowIndex] || ''}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">H Count:</span> {totalH} | 
                  <span className="font-semibold"> T Count:</span> {totalT}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadTail;