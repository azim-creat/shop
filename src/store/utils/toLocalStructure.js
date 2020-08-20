const toLocalStructure = (data, state) => {
  const newItems = [...state.items];
  const newItemsKeys = [...state.itemsKeys];

  // 468 цена
  // 863 группа
  // 865 подгруппа тип
  // 868 размер
  // 111
  // 866 цвет
  // 1000012 проба
  // full_name - назание

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const newItem = {};
      const objectFromServer = data[key];

      newItem.categoryCode = objectFromServer.field_863;
      newItem.id = objectFromServer.profile_id;
      newItem.price = parseInt(objectFromServer.field_468, 10);
      newItem.productTitle =
        objectFromServer.full_name || objectFromServer.field_111;
      newItem.image = objectFromServer.field_701 ?  `https://my.zoomiya.com/crm/files/172/${objectFromServer.field_701}` :  require("../../assets/images/no_img.svg");
      newItem.product_img = [
        require("../../assets/images/product3.jpg"),
        require("../../assets/images/product1.jpg"),
        require("../../assets/images/product3.jpg"),
        require("../../assets/images/product4.jpg")
      ];
      newItem.description = [
        newItem.field_868 || "-",
        newItem.field_866 || "-",
        newItem.field_1000012 || "-"
      ];
      newItems.push(newItem);
      newItemsKeys.push(newItem.id);
    }
  }

  return { newItems, newItemsKeys };
};

export default toLocalStructure;
