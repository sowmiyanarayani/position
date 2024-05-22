import { React } from 'react';
import './App.scss';
import SelectShapes from './components/SelectShapes';
import RandomNumber from './components/RandomNumber';
import GenerateShapes from './components/GenerateShapes';

const App = (context) =>
	<div className="App">
		<center>
			<GenerateShapes { ...context }/>
			<SelectShapes { ...context }/>
			<RandomNumber { ...context }/>
		</center>
	</div>;

export default App;
