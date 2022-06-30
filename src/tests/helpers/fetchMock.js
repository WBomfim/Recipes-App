const fetchMock = (mockValue) => {
  let mock;

  beforeEach(() => {
    mock = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockValue),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
};

export default fetchMock;
