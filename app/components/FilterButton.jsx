"use client"
export default function FilterButton({ interests, onClick }) {
  return (
    <>
      {interests.map((interest) => (
        <button key={interest} onClick={() => onClick(interest)} className='btn-filter'>
          {interest}
        </button>
      ))}
    </>
  )
}
