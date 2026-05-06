import { Table, Column, DataType, Model, PrimaryKey} from "sequelize-typescript";
@Table({
    tableName:'gold_discount_driven_products',
    timestamps:false,
})
class DiscountDrivenProducts extends Model{
@PrimaryKey
@Column({
    type:DataType.STRING
})
declare product_type: string

@Column({
    type:DataType.INTEGER
})
declare total_quantity: number 

@Column({
    type:DataType.FLOAT
})
declare total_net_sales: number

@Column({
    type:DataType.FLOAT
})
declare total_discounts: number
}

export default  DiscountDrivenProducts