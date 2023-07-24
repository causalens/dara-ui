import { faGrinTongue } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinTongue icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinTongue = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinTongue} {...props} />;
};

export default GrinTongue;
