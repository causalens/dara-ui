import { faPortrait } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Portrait icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Portrait = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPortrait} {...props} />;
};

export default Portrait;
