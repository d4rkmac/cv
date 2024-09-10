new DataTable('#example');

$('#deleteRows').click(function() {
    // Delete rows from Table 1
    $('#example1 tbody input.row-select:checked').each(function() {
        var row = $(this).closest('tr');
        table1.row(row).remove().draw();
    });

    // Delete rows from Table 2
    $('#example2 tbody input.row-select:checked').each(function() {
        var row = $(this).closest('tr');
        table2.row(row).remove().draw();
    });
});