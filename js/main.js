var selectedModel = null;

function showModel(model) {

    document.querySelector('#target').emit('stop');

    selectedModel = models[model];
    $('#target').attr('src', selectedModel.id);
    $('#target').attr('position', selectedModel.position);
    $('#target').attr('rotation', selectedModel.rotation);
    $('#target').attr('scale', selectedModel.scale);

    if (selectedModel.animation) {
        document.querySelector('#target').emit('start');
    }
}