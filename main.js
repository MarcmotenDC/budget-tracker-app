// main.js (updated)
// TODO: Import the filter, sort, and search managers here
import { searchTransactions } from './features/searchManager.js';
import { filterTransactionsByType } from './features/filterManager.js';
import { addTransaction } from './data/dataManager.js';
import { renderTransactions } from './ui/uiManager.js';
import { sortTransactions } from './features/sortManager.js';

document.getElementById('transaction-form').addEventListener('submit', event => {
    event.preventDefault();

    const amountInput = document.getElementById('amount-input');
    const categoryInput = document.getElementById('category-input');
    const typeInput = document.querySelector('input[name="transaction-type"]:checked');

    const amount = parseFloat(amountInput.value.trim());
    const category = categoryInput.value.trim();
    const type = typeInput.value;

    if (amount && category && type) {
        addTransaction({ amount, category, type });
        renderTransactions();

        // Reset form fields
        amountInput.value = '';
        categoryInput.value = '';
        typeInput.checked = false;
        amountInput.focus();
    }
});

// TODO: Add event listeners for search input, filter select, and sort select here
// Example: document.getElementById('search-input').addEventListener('input', renderTransactionsWithFilters);
document.getElementById('search-input').addEventListener('input', renderTransactionsWithFilters);
document.getElementById('filter-select').addEventListener('change', renderTransactionsWithFilters);
document.getElementById('sort-select').addEventListener('change', renderTransactionsWithFilters);

function renderTransactionsWithFilters() {
    const search = document.getElementById('search-input').value.trim();
    const filter = document.getElementById('filter-select').value;
    const sort = document.getElementById('sort-select').value;

    let filteredTransactions = filterTransactionsByType(filter);
    filteredTransactions = searchTransactions(filteredTransactions, search);
    filteredTransactions = sortTransactions(filteredTransactions, sort);

    renderTransactions(filteredTransactions);
}
renderTransactions(); // Initial render
