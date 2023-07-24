import { faICursor } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ICursor icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ICursor = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faICursor} {...props} />;
};

export default ICursor;
