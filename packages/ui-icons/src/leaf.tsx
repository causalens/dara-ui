import { faLeaf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Leaf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Leaf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLeaf} {...props} />;
};

export default Leaf;
