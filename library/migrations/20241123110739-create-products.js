    'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tạo bảng 'products'
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      imageLink: {
        type: Sequelize.STRING
      },
      shortDescription: {
        type: Sequelize.TEXT
      },
      detail: {
        type: Sequelize.TEXT
      },
      material: {
        type: Sequelize.STRING
      },
      weightKg: {
        type: Sequelize.FLOAT
      },
      promotion: {
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      stockQuantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

   
    await queryInterface.createTable('productSizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      size: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    
    const products = [
      {
        name: "CHAIR",
        price: 55.00,
        imageLink: "images/product-chair.png",
        shortDescription: "This ergonomic chair is designed for comfort and support, making it perfect for long hours at work. Its sleek, modern look complements any workspace or living area.",
        detail: "This ergonomic chair combines both style and function, offering exceptional lumbar support for long hours of sitting. Its modern design features clean lines and a contemporary aesthetic that suits both home offices and professional settings.",
        material: "Fabric, Steel, Wood",
        weightKg: 4.5,
        promotion: 10,
        brand: "APEX",
        category: "Living Room",
        stockQuantity: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SOFA",
        price: 79.00,
        imageLink: "images/product-sofa.png",
        shortDescription: "A cozy sofa with plush cushions, offering both style and comfort for your living room. Its simple design makes it a versatile piece that suits any interior decor.",
        detail: "A roomy, Italian-style sofa made to be comfortable and convenient in your home. This sofa is both fashionable and long-lasting, with luxurious cushions and premium upholstery. It is ideal for living rooms or communal areas because of its ample size, which comfortably fits several people. It may be easily incorporated into a variety of decor styles thanks to its exquisite yet simple design.",
        material: "Upholstery, Wood, Foam",
        weightKg: 34.0,
        promotion: 15,
        brand: "Call of SOFA",
        category: "Sofa",
        stockQuantity: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "GUYER KITCHEN",
        price: 120.00,
        imageLink: "images/kitchen.png",
        shortDescription: "This stylish kitchen set offers ample storage space, making it perfect for home cooking enthusiasts. Its clean lines and modern design bring a fresh feel to any home.",
        detail: "The Guyer Kitchen set is designed to combine functionality with modern aesthetics. Featuring plenty of storage options, it is perfect for organizing kitchen essentials while adding a sleek, contemporary look to your cooking space. It’s ideal for those who value both practicality and style in their kitchens.",
        material: "Wood, Stainless Steel",
        weightKg: 68.2,
        promotion: 5,
        brand: "Puff B&G",
        category: "Kitchen",
        stockQuantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "GUYER ROOM",
        price: 89.00,
        imageLink: "images/living-room.png",
        shortDescription: "A sophisticated living room set designed for ultimate comfort and style. The pieces are carefully crafted to fit together seamlessly in any living space.",
        detail: "The Guyer Room set offers a combination of luxurious comfort and modern style. This set is ideal for creating a welcoming and elegant atmosphere in your living space. With its seamless design, it fits perfectly in both contemporary and classic interiors, ensuring comfort without compromising style.",
        material: "Wood, Fabric, Foam",
        weightKg: 54.4,
        promotion: 20,
        brand: "Fornighte",
        category: "Matrass",
        stockQuantity: 54,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "BEDROOM",
        price: 65.00,
        imageLink: "images/bedroom.png",
        shortDescription: "This bedroom set is designed to provide comfort and relaxation. The soothing colors and high-quality materials create a peaceful environment for restful sleep.",
        detail: "The Bedroom set combines sophisticated design with maximum comfort, ensuring a restful night’s sleep. Made with premium materials and soothing hues, it brings tranquility to your space while offering plenty of storage solutions and a stylish, modern aesthetic.",
        material: "Wood, Fabric, Foam",
        weightKg: 59.0,
        promotion: 8,
        brand: "APEX",
        category: "Bedroom",
        stockQuantity: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "LIVING GUYER",
        price: 99.00,
        imageLink: "images/header-bg.jpeg",
        shortDescription: "This versatile living room set offers both comfort and elegance. With a modern touch, it’s perfect for creating a stylish, cozy environment in any home.",
        detail: "The Living Guyer set is crafted to fit perfectly in any modern living room, offering both comfort and elegance. Its unique design combines plush cushions with a stylish frame, making it ideal for creating a cozy yet chic space. Whether you're hosting guests or relaxing, this set offers both style and durability.",
        material: "Wood, Fabric, Foam",
        weightKg: 49.9,
        promotion: 12,
        brand: "Call of SOFA",
        category: "Living Room",
        stockQuantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "STREET CHAIR",
        price: 49.00,
        imageLink: "images/outdoors.png",
        shortDescription: "A durable outdoor chair that combines sturdy construction with comfort for outdoor spaces. Perfect for patios, gardens, or balconies, it adds both functionality and style.",
        detail: "The Street Chair is designed for outdoor comfort and durability. Constructed with weather-resistant materials, it’s ideal for patios, gardens, and balconies. Its ergonomic design ensures comfort for hours of sitting, while its sleek, modern aesthetic adds a touch of style to any outdoor area.",
        material: "Metal, Fabric",
        weightKg: 6.8,
        promotion: 18,
        brand: "Puff B&G",
        category: "Outdoor",
        stockQuantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "WHITE SOFA",
        price: 75.00,
        imageLink: "images/product-bigsofa.png",
        shortDescription: "A roomy and fashionable sofa with high-quality upholstery for both durability and comfort. Its minimalist design fits well with a variety of home decor styles.",
        detail: "A roomy, Italian-style sofa made to be comfortable and convenient in your home. This sofa is both fashionable and long-lasting, with luxurious cushions and premium upholstery. It is ideal for living rooms or communal areas because of its ample size, which comfortably fits several people. It may be easily incorporated into a variety of decor styles thanks to its exquisite yet simple design.",
        material: "Upholstery, Wood, Foam",
        weightKg: 38.6,
        promotion: 10,
        brand: "Fornighte",
        category: "Sofa",
        stockQuantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "COMFY BED",
        price: 85.00,
        imageLink: "images/compy-bed.jpg",
        shortDescription: "A plush and comfortable bed designed to provide ultimate relaxation.",
        detail: "The Comfy Bed features high-quality materials that ensure maximum comfort and durability. Perfect for creating a restful and cozy environment in your bedroom.",
        material: "Wood, Fabric, Foam",
        weightKg: 55.0,
        promotion: 12,
        brand: "APEX",
        category: "Bedroom",
        stockQuantity: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "LUXURY MATRASS",
        price: 120.00,
        imageLink: "images/luxury-matrass.jpg",
        shortDescription: "A premium matrass that offers luxurious comfort for a restful night's sleep.",
        detail: "The Luxury Matrass is made with high-density foam that contours to your body, providing support and comfort. It's perfect for those who want both comfort and durability in their bedding.",
        material: "Foam, Fabric",
        weightKg: 20.0,
        promotion: 18,
        brand: "Fornighte",
        category: "Matrass",
        stockQuantity: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "OUTDOOR BENCH",
        price: 65.00,
        imageLink: "images/outdoor-bench.jpg",
        shortDescription: "A durable outdoor bench perfect for gardens or patios.",
        detail: "The Outdoor Bench is constructed with weather-resistant materials and provides comfortable seating for outdoor spaces. Its sleek design complements any garden or patio setting.",
        material: "Metal, Wood",
        weightKg: 12.5,
        promotion: 10,
        brand: "Call of SOFA",
        category: "Outdoor",
        stockQuantity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MODERN KITCHEN SET",
        price: 150.00,
        imageLink: "images/kitchen-set.jpg",
        shortDescription: "A stylish kitchen set designed to optimize storage and functionality.",
        detail: "The Modern Kitchen Set is made of high-quality materials and offers ample storage space. Its contemporary design fits well in any modern kitchen and provides both style and functionality.",
        material: "Wood, Stainless Steel",
        weightKg: 75.0,
        promotion: 5,
        brand: "Puff B&G",
        category: "Kitchen",
        stockQuantity: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    

    const productSizes = [
      { productId: 1, size: "XS", createdAt: new Date(), updatedAt: new Date() },
      { productId: 1, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 1, size: "XL", createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, size: "XS", createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, size: "L", createdAt: new Date(), updatedAt: new Date() },
      { productId: 3, size: "XS", createdAt: new Date(), updatedAt: new Date() },
      { productId: 3, size: "S", createdAt: new Date(), updatedAt: new Date() },
      { productId: 3, size: "XL", createdAt: new Date(), updatedAt: new Date() },
      { productId: 4, size: "S", createdAt: new Date(), updatedAt: new Date() },
      { productId: 4, size: "L", createdAt: new Date(), updatedAt: new Date() },
      { productId: 4, size: "XL", createdAt: new Date(), updatedAt: new Date() },
      { productId: 5, size: "XS", createdAt: new Date(), updatedAt: new Date() },
      { productId: 5, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 5, size: "XL", createdAt: new Date(), updatedAt: new Date() },
      { productId: 6, size: "S", createdAt: new Date(), updatedAt: new Date() },
      { productId: 6, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 6, size: "L", createdAt: new Date(), updatedAt: new Date() },
      { productId: 7, size: "S", createdAt: new Date(), updatedAt: new Date() },
      { productId: 7, size: "X", createdAt: new Date(), updatedAt: new Date() },
      { productId: 7, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 8, size: "XS", createdAt: new Date(), updatedAt: new Date() },
      { productId: 8, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 8, size: "XL", createdAt: new Date(), updatedAt: new Date() },
      { productId: 9, size: "S", createdAt: new Date(), updatedAt: new Date() },
      { productId: 9, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 9, size: "L", createdAt: new Date(), updatedAt: new Date() },
      { productId: 10, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 10, size: "L", createdAt: new Date(), updatedAt: new Date() },
      { productId: 10, size: "XL", createdAt: new Date(), updatedAt: new Date() },
      { productId: 11, size: "S", createdAt: new Date(), updatedAt: new Date() },
      { productId: 11, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 11, size: "L", createdAt: new Date(), updatedAt: new Date() },
      { productId: 12, size: "XS", createdAt: new Date(), updatedAt: new Date() },
      { productId: 12, size: "M", createdAt: new Date(), updatedAt: new Date() },
      { productId: 12, size: "L", createdAt: new Date(), updatedAt: new Date() },
    
    ];

    await queryInterface.bulkInsert('products', products);
    await queryInterface.bulkInsert('productSizes', productSizes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productSizes');
    await queryInterface.dropTable('products');
  }
};
