import { faSquareRootAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareRootAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareRootAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareRootAlt} {...props} />;
};

export default SquareRootAlt;
