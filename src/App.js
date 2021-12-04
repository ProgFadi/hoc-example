import logo from './logo.svg';
import './App.css';
import Hoc from './components/HOC'
import ProductsTable from './components/ProductsTable'
import UsersTable from './components/UsersTable'

const ProductsData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Ali'
        
  },
  {
      id: 2,
      name: 'Zain'
  },
  {
      id: 3,
      name: 'Mohammed'
  }
];

const Products = Hoc(
  ProductsTable,
  ProductsData
);

const Users = Hoc(
  UsersTable,
  UsersData
);


function App() {
  return (
    <div className="App">
      <Products></Products>
    </div>
  );
}

export default App;
