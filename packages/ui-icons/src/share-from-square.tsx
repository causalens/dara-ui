import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShareFromSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShareFromSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShareFromSquare} {...props} />;
};

export default ShareFromSquare;
