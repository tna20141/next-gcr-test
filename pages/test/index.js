function Test({ name }) {
  return (
    <div>Testing: {name}</div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      name: 'abc',
    },
  };
}

export default Test;
