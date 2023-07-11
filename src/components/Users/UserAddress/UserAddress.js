const UserAddress = ({address}) => {
    const {street, city} = address;
    return (
        <div>
            <div>street: {street}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {UserAddress};
