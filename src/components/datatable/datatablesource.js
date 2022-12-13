export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 310,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "ram",
    headerName: "Ram",
    width: 90,
  },

  {
    field: "processor_type",
    headerName: "Processor Type",
    width: 190,
  },
  {
    field: "graphics_chipset",
    headerName: "Process Chipset",
    width: 160,
  },
  {
    field: "graphic_memory",
    headerName: "Graphic Memory",
    width: 160,
  },
  {
    field: "memory_type",
    headerName: "Memory Type",
    width: 160,
  },
  {
    field: "graphics_chipset",
    headerName: "Process Chipset",
    width: 160,
  },
  {
    field: "operating_system",
    headerName: "Operating System",
    width: 160,
  },
  {
    field: "hdd_capacity",
    headerName: "HDD Capacity",
    width: 120,
  },
  {
    field: "storage",
    headerName: "Storage",
    width: 90,
  },
  {
    field: "price",
    headerName: "Price",
    width: 160,
  },
];

export const orderColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "order",
    headerName: "Order",
    width: 310,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "ram",
    headerName: "Ram",
    width: 90,
  },
  {
    field: "processor_type",
    headerName: "Processor Type",
    width: 190,
  },
  {
    field: "graphics_chipset",
    headerName: "Process Chipset",
    width: 160,
  },
  {
    field: "memory_type",
    headerName: "Memory Type",
    width: 160,
  },
  {
    field: "price",
    headerName: "Price",
    width: 160,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const productRows = [
  {
    id: 1,
    name: "AMD Ryzen 3 3200G PC Gaming",
    img: "https://p-ph.ipricegroup.com/uploaded_17a271045ed67befb3dfd6307be1977d.jpg",
    ram: "",
    processor_type: "AMD A-Series",
    graphics_chipset: "AMD",
    graphic_memory: "",
    memory_type: "DDR4",
    operating_system: "Windows 10",
    hdd_capacity: "1000GB",
    storage: "",
    price: "₱ 11,200.00 - ₱ 50,699.00",
  },
  {
    id: 2,
    name: "Acer Aspire C 27 All-in-One",
    img: "https://p-ph.ipricegroup.com/uploaded_0efc0c521dd2c50b89d76573e79a1ccf.jpg",
    ram: "16GB",
    processor_type: "Clock Speed 2.4GHz",
    graphics_chipset: "Nvidia",
    graphic_memory: "2000MB",
    memory_type: "",
    operating_system: "Windows 10",
    hdd_capacity: "",
    storage: "",
    price: "₱ 84,285.00 - ₱ 133,102.00",
  }, 
  {
    id: 3,
    name: "ASUS ROG Strix GL510DH AMD Ryzen 7 3700X 512GB",
    img: "https://p-ph.ipricegroup.com/uploaded_29b577528298709464f699453cd49c91.jpg",
    ram: "16GB",
    processor_type: "AMD Ryzen 5 3400G",
    graphics_chipset: "Nvidia",
    graphic_memory: "6000MB",
    memory_type: "DDR4",
    operating_system: "Windows 10",
    hdd_capacity: "",
    storage: "512GB",
    price: "₱ 104,101.00 - ₱ 119,632.00",
  }, 
  {
    id: 4,
    name: "Microsoft Surface Studio 2",
    img: "https://p-ph.ipricegroup.com/uploaded_d8c4fb57438630e0362deec451573886.jpg",
    ram: "16GB",
    processor_type: "Intel Core i7",
    graphics_chipset: "Nvidia",
    graphic_memory: "6000MB",
    memory_type: "",
    operating_system: "Windows 10",
    hdd_capacity: "",
    storage: "",
    price: "₱ 357,085.00",
  }, 
  {
    id: 5,
    name: "ASUS ROG Strix GL510DH",
    img: "https://p-ph.ipricegroup.com/uploaded_29b577528298709464f699453cd49c91.jpg",
    ram: "",
    processor_type: "AMD Ryzen 5 3400G - ₱ 69,733.00 / AMD Ryzen 7 3700X - ₱ 104,101.00",
    graphics_chipset: "Nvidia",
    graphic_memory: "",
    memory_type: "DDR4",
    operating_system: "Windows 10",
    hdd_capacity: "",
    storage: "",
    price: "₱ 69,733.00 - ₱ 119,632.00",
  }, 
  {
    id: 6,
    name: "Corsair One i160",
    img: "https://p-ph.ipricegroup.com/uploaded_8aaab6c95e688dbeaa457a9da23c73da.jpg",
    ram: "16GB",
    processor_type: "Intel Core i9",
    graphics_chipset: "Nvidia",
    graphic_memory: "11000MB",
    memory_type: "DDR4",
    operating_system: "Windows 10",
    hdd_capacity: "",
    storage: "",
    price: "₱ 614,671.00",
  }, 

  {
    id: 7,
    name: "ASUS ROG Strix GL510DH AMD Ryzen 5 3400G 512GB",
    img: "https://p-ph.ipricegroup.com/uploaded_660d939def0850a0ea220aff0c5fd008.jpg",
    ram: "8GB",
    processor_type: "AMD Ryzen 5 3400G - ₱ 69,733.00 / AMD Ryzen 7 3700X - ₱ 104,101.00",
    graphics_chipset: "Nvidia",
    graphic_memory: "4000MB",
    memory_type: "DDR4",
    operating_system: "Windows 10",
    hdd_capacity: "",
    storage: "512GB",
    price: "₱ 69,733.00",
  }, 
  {
    id: 8,
    name: "DELL Alienware Aurora R11 Gaming Computer",
    img: "https://p-ph.ipricegroup.com/uploaded_678dc2590f96e111cce0bd608d83abf3.jpg",
    ram: "8GB",
    processor_type: "Intel Core i7-10700F",
    graphics_chipset: "Nvidia",
    graphic_memory: "",
    memory_type: "DDR4",
    operating_system: "Windows 10",
    hdd_capacity: "",
    storage: "1TB/2TB/512GB",
    price: "₱ 144,578.05 - ₱ 418,686.00",
  }, 
];

export const orderRows = [
  {
    id: 1,
    name: "AMD Ryzen 3 3200G PC Gaming",
    ram: "16GB",
    img: "https://p-ph.ipricegroup.com/uploaded_17a271045ed67befb3dfd6307be1977d.jpg",
    processor_type: "AMD A-Series",
    graphics_chipset: "AMD",
    memory_type: "DDR4",
    price: "₱ 23,200.00",
  },
  {
    id: 2,
    name: "Acer Aspire C 27 All-in-One",
    img: "https://p-ph.ipricegroup.com/uploaded_0efc0c521dd2c50b89d76573e79a1ccf.jpg",
    ram: "16GB",
    processor_type: "Clock Speed 2.4GHz",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 84,285.00",
  }, 
  {
    id: 3,
    name: "ASUS ROG Strix GL510DH",
    img: "https://p-ph.ipricegroup.com/uploaded_29b577528298709464f699453cd49c91.jpg",
    ram: "16GB",
    processor_type: "AMD Ryzen 5 3400G",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 104,101.00",
  }, 
  {
    id: 4,
    name: "Microsoft Surface Studio 2",
    img: "https://p-ph.ipricegroup.com/uploaded_d8c4fb57438630e0362deec451573886.jpg",
    ram: "16GB",
    processor_type: "Intel Core i7",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 357,085.00",
  }, 
  {
    id: 5,
    name: "ASUS ROG Strix GL510DH",
    img: "https://p-ph.ipricegroup.com/uploaded_29b577528298709464f699453cd49c91.jpg",
    ram: "16GB",
    processor_type: "AMD Ryzen 5 3400G",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 69,733.00",
  }, 
  {
    id: 6,
    name: "ASUS ROG Strix GL510DH",
    img: "https://p-ph.ipricegroup.com/uploaded_29b577528298709464f699453cd49c91.jpg",
    ram: "16GB",
    processor_type: "AMD Ryzen 7 3700X",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 104,101.00",
  }, 
  {
    id: 7,
    name: "Corsair One i160",
    img: "https://p-ph.ipricegroup.com/uploaded_8aaab6c95e688dbeaa457a9da23c73da.jpg",
    ram: "16GB",
    processor_type: "Intel Core i9",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 614,671.00",
  }, 
  {
    id: 8,
    name: "ASUS ROG Strix GL510DH",
    img: "https://p-ph.ipricegroup.com/uploaded_660d939def0850a0ea220aff0c5fd008.jpg",
    ram: "8GB",
    processor_type: "AMD Ryzen 5 3400G",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 69,733.00",
  }, 
  {
    id: 9,
    name: "ASUS ROG Strix GL510DH",
    img: "https://p-ph.ipricegroup.com/uploaded_660d939def0850a0ea220aff0c5fd008.jpg",
    ram: "8GB",
    processor_type: "AMD Ryzen 7 3700X",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 104,101.0",
  }, 
  {
    id: 10,
    name: "DELL Alienware Aurora R11 Gaming Computer",
    img: "https://p-ph.ipricegroup.com/uploaded_678dc2590f96e111cce0bd608d83abf3.jpg",
    ram: "8GB",
    processor_type: "Intel Core i7-10700F",
    graphics_chipset: "Nvidia",
    memory_type: "DDR4",
    price: "₱ 244,578.00",
  }, 
];