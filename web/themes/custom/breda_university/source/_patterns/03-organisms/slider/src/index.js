import actions from './actions';

function attach(slider) {
    // Bail if our attach point is not on screen
    if (!slider) {
        return;
    }

    slider.on('staticClick', (event, pointer, cellElement) => {
        // dismiss if cell was not clicked
        if (!cellElement) {
            return false;
        }

        return true;
    });

    actions();
}

export default attach;
