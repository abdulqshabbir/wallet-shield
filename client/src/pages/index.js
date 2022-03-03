/* Tailwind only works properly for .js files not .jsx */
import ExpenseCategory from '../components/ExpenseCategory';
import Header from '../components/Header';

function App() {
    return (
      <div className='container lg mx-auto h-screen lg:max'>
        <Header></Header>
        <main>
          <ExpenseCategory categoryName={"Immediate Obligations"}/> 
          <ExpenseCategory categoryName={"Entertainment"}/> 
        </main>
      </div>
    );
  }
  
  export default App;