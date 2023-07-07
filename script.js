const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('mouseover', highlightSuggestion)

suggestions.addEventListener('mouseout', unhighlightSuggestion)

suggestions.addEventListener('click', useSuggestion);


function searchHandler(e) {
	let char = (e.target.value).toLowerCase()
	search(char)
}


function search(str) {
	let results = []

	fruit.filter(function (el) {
		if (el.toLowerCase().includes(str)) {
			results.push(el)
		}
	})

	showSuggestions(results, str)
}


function showSuggestions(results, input) {
	suggestions.innerText = ''

	let total = 0;

	for (let fruitName of results) {
		total += 1

		let li = document.createElement('li')
		li.innerText = fruitName

		if (li.innerText !== undefined) {
			suggestions.append(li)
		}

		if (input.length === 0) {
			suggestions.innerText = ''
		}

		if (total === 5) {
			break;
		}
	}
}


function highlightSuggestion(e) {
	e.target.classList.add('hover')
}

function unhighlightSuggestion(e) {
	e.target.classList.remove('hover')
}

function useSuggestion(e) {
	let fruit = e.target.innerText
	input.value = fruit
	suggestions.innerText = ''
}

