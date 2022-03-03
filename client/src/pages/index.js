/* Tailwind only works properly for .js files not .jsx */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
      <div className='container lg mx-auto h-screen lg:max'>
        <header className='h-16 mx-12 flex flex-row justify-between items-center'>
          <div>
            <p>Feb 2022</p>
          </div>
          <div>
            <p>My Budget</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPenToSquare}/> 
          </div>
        </header>
        <section className='flex flex-row justify-between px-8 items-center h-16 bg-gray-100 mx-auto'>
            <p>Assign Your Money</p>
            <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded'>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </section>
        <main>
          <header className='h-12 px-8 flex flex-row justify-between items-center bg-gray-300'>
            <h1 className='font-semibold'>Immediate Obligations</h1>
            <h2 className='font-semibold'>Amount Spent</h2>
          </header>
          <ul>
            <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
              <div>Rent/Mortgage</div>
              <div className='h-6 w-1/3 bg-gray-100 rounded-'>
                <div className='w-1/3 h-full bg-green-500'>
                </div>
              </div>
            </li>
            <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
              <div>Food</div>
              <div className='h-6 w-1/3 bg-gray-100 rounded-'>
                <div className='w-2/3 h-full bg-yellow-300'>
                </div>
              </div>
            </li>
            <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
              <div>Groceries</div>
              <div className='h-6 w-1/3 bg-gray-100 rounded-'>
                <div className='w-5/6 h-full bg-red-500'>
                </div>
              </div>
            </li>
          </ul>
          <header className='h-12 px-8 flex flex-row justify-between items-center bg-gray-300'>
            <h1 className='font-semibold'>True Expenses</h1>
            <h2 className='font-semibold'>Amount Spent</h2>
          </header>
          <ul>
            <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
              <div>Movies</div>
              <div className='h-6 w-1/3 bg-gray-100 rounded-'>
                <div className='w-1/3 h-full bg-green-500'>
                </div>
              </div>
            </li>
            <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
              <div>Dining Out</div>
              <div className='h-6 w-1/3 bg-gray-100 rounded-'>
                <div className='w-2/3 h-full bg-yellow-300'>
                </div>
              </div>
            </li>
            <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
              <div>Video Games</div>
              <div className='h-6 w-1/3 bg-gray-100 rounded-'>
                <div className='w-5/6 h-full bg-red-500'>
                </div>
              </div>
            </li>
          </ul>
        </main>
      </div>
    );
  }
  
  export default App;