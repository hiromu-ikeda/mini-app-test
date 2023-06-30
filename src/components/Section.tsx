interface Props {
  title: string
}

export const Section = ({ title }: Props) => {
  return (
    <div className="bg-gray-800 px-4 py-2">
      <p className="text-white">{title}</p>
    </div>
  )
}
