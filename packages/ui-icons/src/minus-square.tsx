import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MinusSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MinusSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMinusSquare} {...props} />;
};

export default MinusSquare;
