import { faTree } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tree icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tree = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTree} {...props} />;
};

export default Tree;
