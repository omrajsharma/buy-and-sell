import React from 'react'

function SellProduct() {
    const title = React.useRef()
    const desc = React.useRef()
    const price = React.useRef()
    const img = React.useRef()
    const place = React.useRef()
    const name = React.useRef()
    const contact = React.useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validations
        if (title.current.value.length < 10 || title.current.value.length > 150) {
            alert('title length should be greater than equals to 10 and less than equals to 150 character')
            return;
        }
        if (desc.current.value.length < 20 || desc.current.value.length > 5000 ) {
            alert('description length should be greater than equals to 20 and less than equals to 5000 characters')
            return;
        }
        if (price.current.value <= 0) {
            alert('price should be greater than 0');
            return;
        }
        if (place.current.value.length < 3 ||  place.current.value.length > 100) {
            alert('place length should be greater than equals to 3 characters and less than equals to 100 characters')
            return;
        }
        if (name.current.value.length < 2 || name.current.value.length > 50) {
            alert('name length should be grater than equals to 2 and less than equals to 50 characters');
            return;
        }
        if (contact.current.value > 1000000000000000) {
            alert('enter a valid contact number');
            return;
        }

        const reqObj = {
            authorContact: contact.current.value,
            authorName: name.current.value,
            itemDate: new Date().toLocaleDateString(),
            itemDesc: desc.current.value,
            itemImg: img.current.value,
            itemPlace: place.current.value,
            itemPrice: price.current.value,
            itemTitle: title.current.value
        }

        // make api call
        const response = await fetch('https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                authorContact: contact.current.value,
                authorName: name.current.value,
                itemDate: new Date().toLocaleDateString(),
                itemDesc: desc.current.value,
                itemImg: img.current.value,
                itemPlace: place.current.value,
                itemPrice: price.current.value,
                itemTitle: title.current.value
            }),
        });

        // reset the form
        title.current.value = '';
        desc.current.value = '';
        price.current.value = '';
        place.current.value = '';
        name.current.value = '';
        contact.current.value = '';
    }

  return (
    <div className='sell-product-container'>
      <form onSubmit={handleSubmit} className='sell-product-form'>
        <input type="text" placeholder='Title' ref={title} required/>
        <input type="text" placeholder='Description' ref={desc} required/>
        <input type="number" placeholder='Price' ref={price} />
        <input type="text" placeholder='Product Image Link' ref={img} required/>
        <input type="text" placeholder='Place (ex Delhi, India)' ref={place} required/>
        <input type="text" placeholder='Full Name' ref={name} required/>
        <input type="number" placeholder='Phone No.' ref={contact} required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SellProduct
