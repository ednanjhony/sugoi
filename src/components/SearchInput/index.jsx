import { Container } from './styles';

export function SearchInput({ value, onChange }) {
	
	function handleChange(e) {
		onChange(e.target.value);
	}

	return (
		<Container>
			<input 
				type="search"
				placeholder="Search animes" 
				value={value} 
				onChange={handleChange} 
			/>
		</Container>
	)
}