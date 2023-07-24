import { faTentArrowDownToLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TentArrowDownToLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TentArrowDownToLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTentArrowDownToLine} {...props} />;
};

export default TentArrowDownToLine;
