import includes from 'core-js/fn/array/includes';
import {createBrowserHistory} from 'history';

export function formatDate(timestamp){
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString('en-US');
	return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function formatQuestion(question, author, authedUser){
	const {id, optionOne, optionTwo, timestamp} = question;
	const {name, avatarURL} = author;
  	return {
    	name,
    	id,
    	timestamp,
    	avatar: avatarURL,
    	optionOne,
    	optionTwo,
    	hasVoted: includes(optionOne.votes, authedUser) || includes(optionTwo.votes, authedUser)   
    }
}
export const history = createBrowserHistory();
export const colors = {
	green: {
    	name: 'green',
    	hex: '#21ba45'
    },
	blue: {
    	name: 'blue',
    	hex: '#2185d0'},
	grey:{
    	name: null,
    	hex: '#d4d4d5'
    }
};

export const styles = {
	primary:{
    	color: 'green',
    	bgColor: 'honeydew'
    },
  	secondary: {
    	color: 'grey',
    	bgColor: '#f4f4f4'}
  
};
