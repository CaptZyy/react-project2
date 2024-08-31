import React from 'react';

function Blog1() {
  return (
    <div className="flex flex-col items-center gap-8 py-48 font-mono ">
        <div className="text-center mb-10 ">
            <h1 className='text-7xl font-bold'>The Disease</h1>
            <h3>Place Where You Can Look Up About Dangerous Diseases</h3>
        </div>
        <div className="flex flex-row items-center gap-6 w-3/4 border-gray-300 border-2 rounded-lg">
            <a href=""><img src="Disease1.jpg" alt="Top section image" className="rounded-lg"/></a>
            <div className="w-1/2">
                <a href=""><h2 className="text-2xl font-bold">Coronary Artery Disease</h2></a>
                <p className="mt-4 text-lg indent-4">
                    Ischemia is defined as inadequate blood supply (circulation) to a local area due to blockage of the blood vessels supplying the area. 
                <p className='mt-2 indent-4'>Ischemic means that an organ (e.g., the heart) is not getting enough blood and oxygen. Ischemic heart disease, also called coronary heart disease (CHD) or coronary artery disease, is the term given to heart problems caused by narrowed heart (coronary) arteries that supply blood to the heart muscle.
                </p>
                <a href="" className='text-blue-600 hover:text-blue-200 mt-1'>Read More...</a>
                </p>
            </div>
       </div>

        <div className="flex flex-row items-center gap-8 w-3/4 border-gray-300 border-2 rounded-lg">
            <div className="w-1/2">
                <a href=""><h2 className="text-2xl font-bold">Chronic Obstructive Pulmonary Disease</h2></a>
                <p className="mt-4 text-lg indent-4">
                    Chronic obstructive pulmonary disease (COPD) is a chronic inflammatory lung disease that causes obstructed airflow from the lungs. Symptoms include breathing difficulty, cough, mucus (sputum) production and wheezing.
                    <p className='mt-2 indent-4'>
                    It's typically caused by long-term exposure to irritating gases or particulate matter, most often from cigarette smoke. People with COPD are at increased risk of developing heart disease, lung cancer and a variety of other conditions.
                    </p>
                    <a href="" className='text-blue-600 hover:text-blue-200 mt-1'>Read More...</a>
                </p>
            </div>
            <img src="Disease2.jpg" alt="Bottom section image"className="w-1/2 rounded-lg"/>
        </div>

        <div className='grid grid-cols-4 gap-12 p-8'>
            <div className="flex flex-col  border-gray-300 border-2 rounded-lg max-w-60 ">
                <a href=""><img src="Disease3.jpeg" alt="Diabetes" className='w-64 h-64' /></a>
                <a href=""><h2 className="text-2xl font-bold">Diabetes</h2></a>
                <p className='mt-4 text-lg '>Diabetes is a group of diseases that affect the production...
                    <p className="mt-1 text-lg"></p>
                    <a href="" className='text-blue-600 hover:text-blue-200 mt-1'>Read More...</a>
                </p>
            </div>
            <div className="flex flex-col  border-gray-300 border-2 rounded-lg max-w-60 ">
                <a href=""><img src="Disease4.jpg" alt="Tuberculosis" className='w-64 h-64' /></a>
                <a href=""><h2 className="text-2xl font-bold">Tuberculosis</h2></a>
                <p className='mt-4 text-lg '>Tuberculosis (TB) is a lung condition caused by the bacteria...
                    <p className="mt-1 text-lg"></p>
                    <a href="" className='text-blue-600 hover:text-blue-200 mt-1'>Read More...</a>
                </p>
            </div>
            <div className="flex flex-col  border-gray-300 border-2 rounded-lg max-w-60 ">
                <a href=""><img src="Disease5.jpeg" alt="Cirrhosis" className='w-64 h-64' /></a>
                <a href=""><h2 className="text-2xl font-bold">Cirrhosis</h2></a>
                <p className='mt-4 text-lg '>Cirrhosis is the result of chronic or long-term scarring...
                    <p className="mt-1 text-lg"></p>
                    <a href="" className='text-blue-600 hover:text-blue-200 mt-1'>Read More...</a>
                </p>
            </div>
            <div className="flex flex-col  border-gray-300 border-2 rounded-lg max-w-60 ">
                <a href=""><img src="Disease6.jpeg" alt="Stroke" className='w-64 h-64' /></a>
                <a href=""><h2 className="text-2xl font-bold">Stroke</h2></a>
                <p className='mt-4 text-lg '>A stroke occurs when an artery in the brain becomes blocked...
                    <p className="mt-1 text-lg"></p>
                    <a href="" className='text-blue-600 hover:text-blue-200 mt-1'>Read More...</a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Blog1;
