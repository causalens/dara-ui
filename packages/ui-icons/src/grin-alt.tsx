import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinAlt} {...props} />;
};

export default GrinAlt;
