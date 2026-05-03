import { Table, Column, DataType, Model,PrimaryKey , HasMany} from "sequelize-typescript";
import Sales from "./Sales";
@Table({
    tableName:'products_type',
    timestamps:false
})

class Products_type extends Model{
@PrimaryKey
@Column({
    type:DataType.INTEGER
})
declare product_id: number

@Column({
    type:DataType.STRING
})
declare product_type: string

@HasMany(()=> Sales,{
    onUpdate:'CASCADE',
    onDelete:'CASCADE'
})
declare sales: Sales[]

}
export default Products_type