import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchCuisine } from '../redux/slices/recipeSlice'

const Header = ({insideHome}) => {
  const dispatch=useDispatch()

  return (
    <>
    <nav style={{backgroundColor:'#005F73'}} className="flex fixed w-full p-5 shadow-md">
      <Link className="text-white text-2xl font-bold flex items-center" to="/">
        <i className="fa-solid fa-utensils me-1"></i> RecipeHub
      </Link>
      <ul className="flex-1 text-right">
        <li className="list-none inline-block px-5">
          { insideHome &&<input onChange={e=>dispatch(searchCuisine(e.target.value.toLowerCase()))} className="rounded p-1" style={{ width: '300px' }} type="text" placeholder="Search Cuisine"/> }
        </li>
        
      </ul>
    </nav>
    </>
  )
}

export default Header