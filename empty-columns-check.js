function emptyColumnsCheck() {
    const tables = document.querySelectorAll('.js-emptyColumnsCheck-table');

    for (const table of tables) {
        const totalColumns = table.querySelectorAll('tr:first-child td').length;
        const rowsLength = table.querySelectorAll('tr').length;

        for (let i = 1; i <= totalColumns; i++) {
            const columnEmptyCells = table.querySelectorAll(`.empty-col-${i}`);

            if (columnEmptyCells.length === rowsLength)
                columnEmptyCells.forEach(columnEmptyCell => columnEmptyCell.style.display = 'none');
        }
    }
}
