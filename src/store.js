import { configureStore, createSlice } from "@reduxjs/toolkit";

// create the Slice
const productsSlice=createSlice({
    name:'products',
    initialState:{
        veg:[
            {name:'Tomato',price:50.45,image:'/vegimages/tom.jpeg'},
            {name:'Radish',price:50.45,image:'/vegimages/rad.jpeg'},
            {name:'Onion',price:50.45,image:'/vegimages/onio.jpeg'},
            {name:'Curry Leaves',price:50.45,image:'/vegimages/curr.jpeg'},
            {name:'Cucumber',price:50.45,image:'/vegimages/cucu.jpeg'},
            {name:'Chilli',price:50.45,image:'/vegimages/chill.jpeg'},
            {name:'Cauliflower',price:50.45,image:'/vegimages/cau.jpeg'},
            {name:'Bottle Gourd',price:53,image:'/vegimages/bott.jpeg'},
            {name:'Bitter Gourd',price:50,image:'/vegimages/bittergourd.jpg'},
            {name:'Ladies Finger',price:55.65,image:'/vegimages/ladiesfinger.jpg'},
            {name:'Pumpkin',price:85,image:'/vegimages/pum.jpeg'},
            {name:'Cabbage',price:55.65,image:'/vegimages/cab.jpeg'},
            {name:'Broccoli',price:5500.65,image:'/vegimages/bro.jpeg'},
            {name:'Beans',price:60.45,image:'/vegimages/beans.jpeg'}
        ],
        nonVeg:[
            {name:'Chicken65',price:280.86,image:'/nonVegimages/chicken65.jpg'},
            {name:'mutton',price:400.45,image:'/nonVegimages/mutton.jpg'},
            {name:'Boti',price:250.65,image:'/nonVegimages/boti.jpg'},
            {name:'Chicken Lollipop',price:320.86,image:'/nonVegimages/chickenlollipop.jpg'},
            {name:'Chicken Manchurian',price:100,image:'/nonVegimages/chickenmanchurian.jpg'},
            {name:'Crab',price:380.86,image:'/nonVegimages/crab.jpg'},
            {name:'Chicken Pakodi',price:1200.86,image:'/nonVegimages/chicken pakodi.jpg'},
            {name:'Chicken Biryani',price:1200.86,image:'/nonVegimages/chickenbiryani.jpg'},
            {name:'Chicken Tikka',price:1200.86,image:'/nonVegimages/chickentikka.jpg'},
            {name:'Fish Curry',price:350.86,image:'/nonVegimages/fishcurry.jpg'},
            {name:'Fish Fry',price:430,image:'/nonVegimages/fishfry.jpg'},
            {name:'Mixed',price:1200.86,image:'/nonVegimages/mixed.jpg'},
            {name:'Prawns',price:520.86,image:'/nonVegimages/prawns.jpg'},
        ],
        milk:[
            {name:'Badam Milk',price:28,image:'/milk/badammilk.jpg'},
            {name:'Butter',price:400.45,image:'/milk/butter.jpg'},
            {name:'Butter Milk',price:35.45,image:'/milk/buttermilk.jpg'},
            {name:'Cheese',price:200.45,image:'/milk/cheese.jpg'},
            {name:'Cova',price:450.45,image:'/milk/cova.jpg'},
            {name:'Curd',price:48,image:'/milk/curd.jpg'},
            {name:'Ghee',price:600,image:'/milk/ghee.jpg'},
            {name:'Ice Cream',price:325.45,image:'/milk/icecream.jpg'},
            {name:'Milk',price:40.45,image:'/milk/milk.jpg'},
            {name:'Milk Powder',price:260.85,image:'/milk/milkpowder.jpg'},
            {name:'Paneer',price:450,image:'/milk/paneer.jpg'},  
        ],
        chocolate:[
            {name:'5Star',price:20,image:'/chocolate/star.jpeg'},
            {name:'Dairy Milk',price:180,image:'/chocolate/dairymilk.jpg'},
            {name:'Febelle',price:280,image:'/chocolate/fabelle.jpg'},
            {name:'Fuse',price:48,image:'/chocolate/fuse.jpg'},
            {name:'Kitkat',price:120,image:'/chocolate/kitkat.jpg'},
            {name:'Snicker',price:80,image:'/chocolate/snicker.jpg'},
        ]
    },
    reducers:{}

});
// Create the Slice
const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        AddToCart:(state,inputItem)=>{
            const item=state.find(item=>item.name===inputItem.payload.name);
            if(item)
            {
                item.quantity +=1;
            }
            else{
                state.push({...inputItem.payload,quantity:1});
            }
        },
        IncCart:(state,inputItem)=>{
            const item=state.find(item=>item.name===inputItem.payload.name);
            if(item)
            {
                item.quantity +=1;
            }
        },
        DecCart: (state, inputItem) => {
            const index = state.findIndex(item => item.name === inputItem.payload.name);
            if (index !== -1) {
              if (state[index].quantity > 1) {
                state[index].quantity -= 1;
              } else {
                state.splice(index, 1); // Properly remove the item if quantity reaches 0
              }
            }
          },          
        RemoveFromCart: (state, inputItem) => {
            const index = state.findIndex(item => item.name === inputItem.payload.name);
            if (index !== -1) {
              state.splice(index, 1); // remove 1 item at that index
            }
          },
        ClearCart:()=>[],
    }
})
export let{AddToCart,IncCart,DecCart,RemoveFromCart,ClearCart}=cartSlice.actions;
 
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isAuthenticated: false,
    currentUser: null,
  },

reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, inputData) => {
      const foundUser = state.users.find(
        (user) =>
          user.username === inputData.payload.username &&
          user.password === inputData.payload.password
      );
      if (foundUser) {
        state.isAuthenticated = true;
        state.currentUser = foundUser;
      } else {
        alert("Invalid Credentials");
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;

// Orders Slice
const ordersSlice = createSlice({
    name: 'orders',
    initialState: [], // Initialize as an empty array
    reducers: {
      OrderDetails: (state, action) => {
        const orderDetails = action.payload;
        state.push(orderDetails); // Push new order details to the array
      },
    },
  });
  
  
  export const { OrderDetails } = ordersSlice.actions;

// configure the store
const store=configureStore({
    reducer:{
        products:productsSlice.reducer,
        cart:cartSlice.reducer,
        orders: ordersSlice.reducer
    }
});
// Export the store
export default store;