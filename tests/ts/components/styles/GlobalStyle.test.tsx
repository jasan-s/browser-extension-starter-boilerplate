import renderer from 'react-test-renderer';
import GlobalStyle from '../../../../src/ts/styles/GlobalStyle';

describe('Testing Global Style', () => {

	test('GlobalStyle Snapshot.', () => {
		// @ts-ignore
		const wow = renderer.create(GlobalStyle.globalStyle.rules).toJSON();
		expect(wow).toMatchSnapshot();
	});
});
