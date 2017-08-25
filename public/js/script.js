$(() => {
    $('.delete-table').on('click', (event) => {
        event.preventDefault();
        const tableName = event.target.dataset.tableName;
        fetch(`/tables/${tableName}`, {
            method: 'delete'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error
                }
                window.location.href = '/'
            })
            .catch(() => {
                window.alert('There was an error when attempting to delete the table.')
            });
    });
});