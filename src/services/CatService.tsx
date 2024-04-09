export const getCatList = async () => {
    const data = await fetch(document.location.origin + '/cats.json?' + Math.random())
    const json = await data.json();

    if (!json) {
        throw 'Error';
    }
    const list = [];

    const isRepeat = (gotItem) => {
        return list.find(item => {
            if (item?.image === gotItem?.image &&
                item?.description === gotItem?.description &&
                item?.name === gotItem?.name) {

                return item;
            }
        });
    }
    if (json) {
        json.forEach(item => {
            if (!item || !item?.image || isRepeat(item)) {
                return;
            }
            list.push({active: false, ...item});
        })
    }

    return list;
}