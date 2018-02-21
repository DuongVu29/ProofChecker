interface Party {
  name: string;
  id: string;
  signedhash: string;
}


interface Proof {
  date: Date;
  time: Date;
  party:Party[];
}

export default Proof;
