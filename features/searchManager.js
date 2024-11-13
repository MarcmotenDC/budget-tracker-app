// searchManager.js
// TODO: Implement the function to search transactions based on a keyword
export function searchTransactions(transactions, searchKeyword) {
    // TODO: Return transactions that match the keyword in either category or amount
    // Hint: You may want to convert searchKeyword to lowercase for more consistent searches
    // Hint: Use the filter() method and check if the category or amount includes the search keyword.
    const search = searchKeyword.toLowerCase()
    const filteredSearch = transactions.filter((transaction) => {
        const amount = transaction.amount.toString().includes(search)
        const category = transaction.category.toLowerCase().includes(search)
        return amount || category
    })

    if (filteredSearch) {
        return transactions
    }
    // Placeholder functionality that allows the app to continue working:
}

/* Refer to the article "Expanding Functionality with Modular Code" under the section "Adding a Keyword Search Feature" for an example of how to implement search within a modular app. The example there closely aligns with the task you're expected to complete.
 */