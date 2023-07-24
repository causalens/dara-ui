import { faLessThan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LessThan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LessThan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLessThan} {...props} />;
};

export default LessThan;
