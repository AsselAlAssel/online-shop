import Item from '../Item/Item'
import classes from './ShowItems.module.scss'
const ShowItems=(props)=>{
    let showItems=props.ItemList.map((ele, index)=>{
        return <Item data={ele} key={index} />
    })
    return(
        <div className={classes['show-items-container']}>
            {showItems}
        </div>
    )
}
export default ShowItems;