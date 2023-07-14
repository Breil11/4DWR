import SearchForm from '../../components/SearchForm/SearchForm';
import './HomePage.css';


function HomePage() {
  return (
    <div className='homepage'>
      <h1>🍅🥦 Welcome to ReactFoodFacts 🥬😜</h1>
      <h2>Ici, vous pouvez tout simplement rechercher des informations sur des produits alimentaires grace à l'API
OpenFoodFacts</h2>
      <SearchForm />
    </div>
  );
}

export default HomePage;
