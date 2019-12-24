import React from 'react';
import './App.css';
import Display from './DisplayApi/DisplayApi';
import InputField from './Input/Input';
import DisplayImage from './Img/Image';
import Img from './Img/img.jpg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userinput: '',
            weatherMain: '',
            description: '',
            windSpeed: '',
            windDeg: '',
            temp: '',
            display: false,
            image: '',
            displayError: false
        };
    }

    changeHandler = event => {
        this.setState({ userinput: event.target.value });
        let state = this.state.userinput;
        console.log(state);
    };

    print = () => {
        let imageUrl =
            'http://openweathermap.org/img/w/' + this.state.image + '.png';
        console.log(imageUrl);

        return imageUrl;
    };

    async weatherInfo() {
        try {
            let api =
                'https:api.openweathermap.org/data/2.5/weather?q=' +
                this.state.userinput +
                '&units=metric&APPID=740fc82bb26d9d97d744f367f428721d';
            console.log(api);
            const response = await fetch(api, { mode: 'cors' });
            const weatherData = await response.json();

            this.setState({ weatherMain: weatherData.weather[0].main });
            this.setState({ description: weatherData.weather[0].description });
            this.setState({ windSpeed: weatherData.wind.speed });
            this.setState({ windDeg: weatherData.wind.deg });
            this.setState({ temp: weatherData.main.temp });
            this.setState({ image: weatherData.weather[0].icon });
            this.setState({ display: true });
            this.setState({ displayError: false });
        } catch (error) {
            this.setState({ displayError: true });
            this.setState({ display: false });
            console.log(error);
        }
    }
    render() {
        return (
            <div className="App-header">
                <InputField blur={this.changeHandler.bind(this)} />
                <Display
                    click={this.weatherInfo.bind(this)}
                    click2={this.print}
                ></Display>
                {this.state.displayError && (
                    <h3> Try again, not a valid city </h3>
                )}
                {this.state.display && (
                    <div className="weatherStats">
                        <h3>
                            The weather in {this.state.userinput} right now:{' '}
                        </h3>
                        <p>
                            {this.state.weatherMain}: {this.state.description}{' '}
                        </p>
                        <DisplayImage className="img" src={this.print()} />

                        <p>Wind speed: {this.state.windSpeed}</p>

                        <p>Celcius: {this.state.temp}</p>
                    </div>
                )}
            </div>
        );
    }
}
export default App;
