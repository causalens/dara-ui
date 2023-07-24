import { faSquareRss } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareRss icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareRss = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareRss} {...props} />;
};

export default SquareRss;
